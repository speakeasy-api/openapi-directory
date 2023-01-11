import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTicketInfoPathParams extends SpeakeasyBase {
    ticketId: string;
}
export declare class GetTicketInfoRequest extends SpeakeasyBase {
    pathParams: GetTicketInfoPathParams;
}
export declare class GetTicketInfoResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
