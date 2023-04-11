import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TableCellLocation } from "./tablecelllocation";
/**
 * The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset.
 */
export declare enum CreateParagraphBulletsRequestBulletPresetEnum {
    BulletDiscCircleSquare = "BULLET_DISC_CIRCLE_SQUARE",
    BulletDiamondxArrow3DSquare = "BULLET_DIAMONDX_ARROW3D_SQUARE",
    BulletCheckbox = "BULLET_CHECKBOX",
    BulletArrowDiamondDisc = "BULLET_ARROW_DIAMOND_DISC",
    BulletStarCircleSquare = "BULLET_STAR_CIRCLE_SQUARE",
    BulletArrow3DCircleSquare = "BULLET_ARROW3D_CIRCLE_SQUARE",
    BulletLefttriangleDiamondDisc = "BULLET_LEFTTRIANGLE_DIAMOND_DISC",
    BulletDiamondxHollowdiamondSquare = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE",
    BulletDiamondCircleSquare = "BULLET_DIAMOND_CIRCLE_SQUARE",
    NumberedDigitAlphaRoman = "NUMBERED_DIGIT_ALPHA_ROMAN",
    NumberedDigitAlphaRomanParens = "NUMBERED_DIGIT_ALPHA_ROMAN_PARENS",
    NumberedDigitNested = "NUMBERED_DIGIT_NESTED",
    NumberedUpperalphaAlphaRoman = "NUMBERED_UPPERALPHA_ALPHA_ROMAN",
    NumberedUpperromanUpperalphaDigit = "NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT",
    NumberedZerodigitAlphaRoman = "NUMBERED_ZERODIGIT_ALPHA_ROMAN"
}
/**
 * Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
 */
export declare class CreateParagraphBulletsRequest extends SpeakeasyBase {
    /**
     * The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset.
     */
    bulletPreset?: CreateParagraphBulletsRequestBulletPresetEnum;
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * The object ID of the shape or table containing the text to add bullets to.
     */
    objectId?: string;
    /**
     * Specifies a contiguous range of an indexed collection, such as characters in text.
     */
    textRange?: Range;
}
