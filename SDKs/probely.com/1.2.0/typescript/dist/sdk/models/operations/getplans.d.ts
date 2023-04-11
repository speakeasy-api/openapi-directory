import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPlansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Plan list
     */
    plans?: shared.Plan[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
