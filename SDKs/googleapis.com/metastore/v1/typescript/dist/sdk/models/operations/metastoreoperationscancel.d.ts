import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MetastoreOperationsCancelQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MetastoreOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreOperationsCancelRequest extends SpeakeasyBase {
    pathParams: MetastoreOperationsCancelPathParams;
    queryParams: MetastoreOperationsCancelQueryParams;
    request?: Record<string, any>;
    security: MetastoreOperationsCancelSecurity;
}
export declare class MetastoreOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    statusCode: number;
}
