import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
 */
export declare class GooglePrivacyDlpV2TransformationConfig extends SpeakeasyBase {
    /**
     * De-identify template. If this template is specified, it will serve as the default de-identify template. This template cannot contain `record_transformations` since it can be used for unstructured content such as free-form text files. If this template is not set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify unstructured content.
     */
    deidentifyTemplate?: string;
    /**
     * Image redact template. If this template is specified, it will serve as the de-identify template for images. If this template is not set, all findings in the image will be redacted with a black box.
     */
    imageRedactTemplate?: string;
    /**
     * Structured de-identify template. If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. If this template is not set but the `deidentify_template` is set, then `deidentify_template` will also apply to the structured content. If neither template is set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify structured content.
     */
    structuredDeidentifyTemplate?: string;
}
