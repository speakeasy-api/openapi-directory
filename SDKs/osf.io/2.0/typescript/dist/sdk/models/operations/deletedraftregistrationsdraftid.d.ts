import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDraftRegistrationsDraftIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the draft registration.
     */
    draftId: string;
}
export declare class DeleteDraftRegistrationsDraftIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
