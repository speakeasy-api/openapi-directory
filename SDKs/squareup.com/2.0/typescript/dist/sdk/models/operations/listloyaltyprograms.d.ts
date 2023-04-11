import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLoyaltyProgramsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listLoyaltyProgramsResponse?: shared.ListLoyaltyProgramsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
