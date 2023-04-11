import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePaymentRequest extends SpeakeasyBase {
    message?: string;
    nanoErg: number;
    receiverAddress: string;
    senderAddress?: string;
    tokenId?: string;
    tokenRawAmount?: number;
}
