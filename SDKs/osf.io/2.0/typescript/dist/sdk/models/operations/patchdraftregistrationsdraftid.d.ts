import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchDraftRegistrationsDraftIdRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * The unique identifier of the draft registration.
     */
    draftId: string;
}
export declare class PatchDraftRegistrationsDraftIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
