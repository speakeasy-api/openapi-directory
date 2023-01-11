import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveAccountMetadataPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveAccountMetadataRequest extends SpeakeasyBase {
    pathParams: RetrieveAccountMetadataPathParams;
}
export declare class RetrieveAccountMetadataResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
