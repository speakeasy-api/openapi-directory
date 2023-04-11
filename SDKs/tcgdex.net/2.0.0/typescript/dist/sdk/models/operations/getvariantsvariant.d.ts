import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVariantsVariantRequest extends SpeakeasyBase {
    variant: string;
}
export declare class GetVariantsVariantResponse extends SpeakeasyBase {
    /**
     * Get the cards available in the specified variant
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
