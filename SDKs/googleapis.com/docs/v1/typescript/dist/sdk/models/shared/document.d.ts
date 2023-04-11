import { SpeakeasyBase } from "../../../internal/utils";
import { Body, BodyInput } from "./body";
import { DocumentStyle } from "./documentstyle";
import { Footer, FooterInput } from "./footer";
import { Footnote, FootnoteInput } from "./footnote";
import { Header, HeaderInput } from "./header";
import { InlineObject } from "./inlineobject";
import { List } from "./list";
import { NamedRanges } from "./namedranges";
import { NamedStyles } from "./namedstyles";
import { PositionedObject } from "./positionedobject";
import { SuggestedDocumentStyle } from "./suggesteddocumentstyle";
import { SuggestedNamedStyles } from "./suggestednamedstyles";
/**
 * Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE.
 */
export declare enum DocumentSuggestionsViewModeEnum {
    DefaultForCurrentAccess = "DEFAULT_FOR_CURRENT_ACCESS",
    SuggestionsInline = "SUGGESTIONS_INLINE",
    PreviewSuggestionsAccepted = "PREVIEW_SUGGESTIONS_ACCEPTED",
    PreviewWithoutSuggestions = "PREVIEW_WITHOUT_SUGGESTIONS"
}
/**
 * A Google Docs document.
 */
export declare class Document extends SpeakeasyBase {
    /**
     * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
     */
    body?: Body;
    /**
     * Output only. The ID of the document.
     */
    documentId?: string;
    /**
     * The style of the document.
     */
    documentStyle?: DocumentStyle;
    /**
     * Output only. The footers in the document, keyed by footer ID.
     */
    footers?: Record<string, Footer>;
    /**
     * Output only. The footnotes in the document, keyed by footnote ID.
     */
    footnotes?: Record<string, Footnote>;
    /**
     * Output only. The headers in the document, keyed by header ID.
     */
    headers?: Record<string, Header>;
    /**
     * Output only. The inline objects in the document, keyed by object ID.
     */
    inlineObjects?: Record<string, InlineObject>;
    /**
     * Output only. The lists in the document, keyed by list ID.
     */
    lists?: Record<string, List>;
    /**
     * Output only. The named ranges in the document, keyed by name.
     */
    namedRanges?: Record<string, NamedRanges>;
    /**
     * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
     */
    namedStyles?: NamedStyles;
    /**
     * Output only. The positioned objects in the document, keyed by object ID.
     */
    positionedObjects?: Record<string, PositionedObject>;
    /**
     * Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
     */
    revisionId?: string;
    /**
     * Output only. The suggested changes to the style of the document, keyed by suggestion ID.
     */
    suggestedDocumentStyleChanges?: Record<string, SuggestedDocumentStyle>;
    /**
     * Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.
     */
    suggestedNamedStylesChanges?: Record<string, SuggestedNamedStyles>;
    /**
     * Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE.
     */
    suggestionsViewMode?: DocumentSuggestionsViewModeEnum;
    /**
     * The title of the document.
     */
    title?: string;
}
/**
 * A Google Docs document.
 */
export declare class DocumentInput extends SpeakeasyBase {
    /**
     * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
     */
    body?: BodyInput;
    /**
     * Output only. The ID of the document.
     */
    documentId?: string;
    /**
     * The style of the document.
     */
    documentStyle?: DocumentStyle;
    /**
     * Output only. The footers in the document, keyed by footer ID.
     */
    footers?: Record<string, FooterInput>;
    /**
     * Output only. The footnotes in the document, keyed by footnote ID.
     */
    footnotes?: Record<string, FootnoteInput>;
    /**
     * Output only. The headers in the document, keyed by header ID.
     */
    headers?: Record<string, HeaderInput>;
    /**
     * Output only. The inline objects in the document, keyed by object ID.
     */
    inlineObjects?: Record<string, InlineObject>;
    /**
     * Output only. The lists in the document, keyed by list ID.
     */
    lists?: Record<string, List>;
    /**
     * Output only. The named ranges in the document, keyed by name.
     */
    namedRanges?: Record<string, NamedRanges>;
    /**
     * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
     */
    namedStyles?: NamedStyles;
    /**
     * Output only. The positioned objects in the document, keyed by object ID.
     */
    positionedObjects?: Record<string, PositionedObject>;
    /**
     * Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes.
     */
    revisionId?: string;
    /**
     * Output only. The suggested changes to the style of the document, keyed by suggestion ID.
     */
    suggestedDocumentStyleChanges?: Record<string, SuggestedDocumentStyle>;
    /**
     * Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.
     */
    suggestedNamedStylesChanges?: Record<string, SuggestedNamedStyles>;
    /**
     * Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE.
     */
    suggestionsViewMode?: DocumentSuggestionsViewModeEnum;
    /**
     * The title of the document.
     */
    title?: string;
}
