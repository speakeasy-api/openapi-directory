import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSitesCsvSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportSitesCsvRequest extends SpeakeasyBase {
    security: ExportSitesCsvSecurity;
}
export declare class ExportSitesCsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportSitesCSV200TextCSVBinaryString?: Uint8Array;
}
