import { SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { ObjectReferences } from "./objectreferences";
import { ParagraphElement, ParagraphElementInput } from "./paragraphelement";
import { ParagraphStyle } from "./paragraphstyle";
import { SuggestedBullet } from "./suggestedbullet";
import { SuggestedParagraphStyle } from "./suggestedparagraphstyle";
/**
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
 */
export declare class Paragraph extends SpeakeasyBase {
    /**
     * Describes the bullet of a paragraph.
     */
    bullet?: Bullet;
    /**
     * The content of the paragraph, broken down into its component parts.
     */
    elements?: ParagraphElement[];
    /**
     * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    paragraphStyle?: ParagraphStyle;
    /**
     * The IDs of the positioned objects tethered to this paragraph.
     */
    positionedObjectIds?: string[];
    /**
     * The suggested changes to this paragraph's bullet.
     */
    suggestedBulletChanges?: Record<string, SuggestedBullet>;
    /**
     * The suggested paragraph style changes to this paragraph, keyed by suggestion ID.
     */
    suggestedParagraphStyleChanges?: Record<string, SuggestedParagraphStyle>;
    /**
     * The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID.
     */
    suggestedPositionedObjectIds?: Record<string, ObjectReferences>;
}
/**
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
 */
export declare class ParagraphInput extends SpeakeasyBase {
    /**
     * Describes the bullet of a paragraph.
     */
    bullet?: Bullet;
    /**
     * The content of the paragraph, broken down into its component parts.
     */
    elements?: ParagraphElementInput[];
    /**
     * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    paragraphStyle?: ParagraphStyle;
    /**
     * The IDs of the positioned objects tethered to this paragraph.
     */
    positionedObjectIds?: string[];
    /**
     * The suggested changes to this paragraph's bullet.
     */
    suggestedBulletChanges?: Record<string, SuggestedBullet>;
    /**
     * The suggested paragraph style changes to this paragraph, keyed by suggestion ID.
     */
    suggestedParagraphStyleChanges?: Record<string, SuggestedParagraphStyle>;
    /**
     * The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID.
     */
    suggestedPositionedObjectIds?: Record<string, ObjectReferences>;
}
