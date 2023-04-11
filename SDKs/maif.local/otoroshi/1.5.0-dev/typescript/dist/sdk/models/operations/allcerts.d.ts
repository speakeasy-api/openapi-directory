import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AllCertsResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    certificates?: shared.Certificate[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
