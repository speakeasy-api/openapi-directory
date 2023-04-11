import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportTemplateTemplateLanguageLabelEnum {
    Django = "Django",
    Jinja2 = "Jinja2"
}
export declare enum ExportTemplateTemplateLanguageValueEnum {
    Django = "django",
    Jinja2 = "jinja2"
}
export declare class ExportTemplateTemplateLanguage extends SpeakeasyBase {
    label: ExportTemplateTemplateLanguageLabelEnum;
    value: ExportTemplateTemplateLanguageValueEnum;
}
export declare class ExportTemplate extends SpeakeasyBase {
    contentType: string;
    description?: string;
    /**
     * Extension to append to the rendered filename
     */
    fileExtension?: string;
    id?: number;
    /**
     * Defaults to <code>text/plain</code>
     */
    mimeType?: string;
    name: string;
    /**
     * The list of objects being exported is passed as a context variable named <code>queryset</code>.
     */
    templateCode: string;
    templateLanguage?: ExportTemplateTemplateLanguage;
}
