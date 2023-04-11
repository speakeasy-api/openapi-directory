import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDraftRegistrationsDraftIdContributorsUserIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Draft Registration.
     */
    draftId: string;
    /**
     * The unique identifier of the Contributor.
     */
    userId: string;
}
export declare class GetDraftRegistrationsDraftIdContributorsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
