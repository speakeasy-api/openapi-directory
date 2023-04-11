import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableExportTemplateTemplateLanguageEnum {
    Django = "django",
    Jinja2 = "jinja2"
}
export declare class WritableExportTemplateInput extends SpeakeasyBase {
    contentType: string;
    description?: string;
    /**
     * Extension to append to the rendered filename
     */
    fileExtension?: string;
    /**
     * Defaults to <code>text/plain</code>
     */
    mimeType?: string;
    name: string;
    /**
     * The list of objects being exported is passed as a context variable named <code>queryset</code>.
     */
    templateCode: string;
    templateLanguage?: WritableExportTemplateTemplateLanguageEnum;
}
