import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasExportTemplatesPartialUpdateRequest extends SpeakeasyBase {
    exportTemplateInput: shared.ExportTemplateInput;
    /**
     * A unique integer value identifying this export template.
     */
    id: number;
}
export declare class ExtrasExportTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
