import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTicketInfoRequest extends SpeakeasyBase {
    /**
     * A unique abuse ticket identifier
     */
    ticketId: string;
}
export declare class GetTicketInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
