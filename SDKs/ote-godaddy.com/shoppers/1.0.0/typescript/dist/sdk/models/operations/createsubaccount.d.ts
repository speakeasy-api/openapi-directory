import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSubaccountRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    subaccountCreate?: any;
    textXML: Uint8Array;
}
export declare class CreateSubaccountRequest extends SpeakeasyBase {
    request: CreateSubaccountRequests;
}
export declare class CreateSubaccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    shopperId?: any;
    statusCode: number;
}
