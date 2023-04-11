import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful request
     */
    setResumes?: shared.SetResume[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
