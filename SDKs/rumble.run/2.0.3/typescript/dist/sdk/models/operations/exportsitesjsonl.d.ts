import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSitesJsonlQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportSitesJsonlSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportSitesJsonlRequest extends SpeakeasyBase {
    queryParams: ExportSitesJsonlQueryParams;
    security: ExportSitesJsonlSecurity;
}
export declare class ExportSitesJsonlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportSitesJSONL200ApplicationJSONBinaryString?: Uint8Array;
}
