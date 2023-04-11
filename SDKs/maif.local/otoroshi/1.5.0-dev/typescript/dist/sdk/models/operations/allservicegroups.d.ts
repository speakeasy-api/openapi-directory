import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AllServiceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    groups?: shared.Group[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
