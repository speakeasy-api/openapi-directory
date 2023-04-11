import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDexIdsDexIdRequest extends SpeakeasyBase {
    dexId: string;
}
export declare class GetDexIdsDexIdResponse extends SpeakeasyBase {
    /**
     * Get the cards containing the specified dexId
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
