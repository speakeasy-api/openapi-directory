import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2OngoingActionsJsonRequestBody extends SpeakeasyBase {
    /**
     * Action that is being marked ongoing. This will validate that the action is still
     *
     * @remarks
     * valid before modifying it. Ongoing actions can not be marked ongoing.
     *
     */
    actionId?: number;
}
export declare class PostV2OngoingActionsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
