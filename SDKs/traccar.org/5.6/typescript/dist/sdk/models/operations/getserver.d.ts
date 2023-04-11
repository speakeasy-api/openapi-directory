import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    server?: shared.Server;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
