import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasExportTemplatesUpdateRequest extends SpeakeasyBase {
    writableExportTemplateInput: shared.WritableExportTemplateInput;
    /**
     * A unique integer value identifying this export template.
     */
    id: number;
}
export declare class ExtrasExportTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
