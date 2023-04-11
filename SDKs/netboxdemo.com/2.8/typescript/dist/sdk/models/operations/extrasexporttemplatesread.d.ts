import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasExportTemplatesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this export template.
     */
    id: number;
}
export declare class ExtrasExportTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
