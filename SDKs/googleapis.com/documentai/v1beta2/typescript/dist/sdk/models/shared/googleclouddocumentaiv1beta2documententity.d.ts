import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue } from "./googleclouddocumentaiv1beta2documententitynormalizedvalue";
import { GoogleCloudDocumentaiV1beta2DocumentPageAnchor } from "./googleclouddocumentaiv1beta2documentpageanchor";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchor } from "./googleclouddocumentaiv1beta2documenttextanchor";
/**
 * An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentEntity extends SpeakeasyBase {
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
    normalizedValue?: GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue;
    /**
     * Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
     */
    pageAnchor?: GoogleCloudDocumentaiV1beta2DocumentPageAnchor;
    /**
     * Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
     */
    properties?: GoogleCloudDocumentaiV1beta2DocumentEntity[];
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
    /**
     * Optional. Whether the entity will be redacted for de-identification purposes.
     */
    redacted?: boolean;
    /**
     * Text reference indexing into the Document.text.
     */
    textAnchor?: GoogleCloudDocumentaiV1beta2DocumentTextAnchor;
    /**
     * Required. Entity type from a schema e.g. `Address`.
     */
    type?: string;
}
