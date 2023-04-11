import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InitiateServiceGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
