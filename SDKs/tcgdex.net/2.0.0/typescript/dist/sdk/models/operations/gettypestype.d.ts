import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTypesTypeRequest extends SpeakeasyBase {
    type: string;
}
export declare class GetTypesTypeResponse extends SpeakeasyBase {
    /**
     * Get the cards containing the specified type
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
