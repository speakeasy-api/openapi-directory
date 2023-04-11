import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DraftRegistrationContributorsListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the Draft Registration.
     */
    draftId: string;
}
export declare class DraftRegistrationContributorsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
