import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPresenceByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetPresenceByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the presence
     */
    presence?: shared.Presence;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
