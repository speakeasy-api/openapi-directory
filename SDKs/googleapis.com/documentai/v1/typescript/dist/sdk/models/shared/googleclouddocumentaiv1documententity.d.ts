import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1DocumentPageAnchor } from "./googleclouddocumentaiv1documentpageanchor";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
/**
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
 */
export declare class GoogleCloudDocumentaiV1DocumentEntity extends SpeakeasyBase {
    /**
     * Optional. Confidence of detected Schema entity. Range `[0, 1]`.
     */
    confidence?: number;
    /**
     * Optional. Canonical id. This will be a unique value in the entity list for this document.
     */
    id?: string;
    /**
     * Optional. Deprecated. Use `id` field instead.
     */
    mentionId?: string;
    /**
     * Optional. Text value of the entity e.g. `1600 Amphitheatre Pkwy`.
     */
    mentionText?: string;
    /**
     * Parsed and normalized entity value.
     */
    normalizedValue?: GoogleCloudDocumentaiV1DocumentEntityNormalizedValue;
    /**
     * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
     */
    pageAnchor?: GoogleCloudDocumentaiV1DocumentPageAnchor;
    /**
     * Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
     */
    properties?: GoogleCloudDocumentaiV1DocumentEntity[];
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
    /**
     * Optional. Whether the entity will be redacted for de-identification purposes.
     */
    redacted?: boolean;
    /**
     * Text reference indexing into the Document.text.
     */
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
    /**
     * Required. Entity type from a schema e.g. `Address`.
     */
    type?: string;
}
