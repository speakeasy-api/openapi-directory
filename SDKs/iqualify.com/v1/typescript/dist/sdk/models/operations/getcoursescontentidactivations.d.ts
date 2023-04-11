import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoursesContentIdActivationsRequest extends SpeakeasyBase {
    /**
     * The content Id
     */
    contentId: string;
}
export declare class GetCoursesContentIdActivationsResponse extends SpeakeasyBase {
    /**
     * Activation list.
     */
    activationResponse?: shared.ActivationResponse;
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
