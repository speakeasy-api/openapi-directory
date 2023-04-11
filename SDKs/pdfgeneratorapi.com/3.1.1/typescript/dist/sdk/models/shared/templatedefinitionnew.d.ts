import { SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";
/**
 * Defines template page size
 */
export declare enum TemplateDefinitionNewLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Page margins in units
 */
export declare class TemplateDefinitionNewLayoutMargins extends SpeakeasyBase {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
/**
 * Page orientation
 */
export declare enum TemplateDefinitionNewLayoutOrientationEnum {
    Portrait = "portrait",
    Landscape = "landscape"
}
/**
 * Defines template page size
 */
export declare enum TemplateDefinitionNewLayoutRepeatLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Defines page size if layout is repeated on the page e.g sheet labels
 */
export declare class TemplateDefinitionNewLayoutRepeatLayout extends SpeakeasyBase {
    /**
     * Defines template page size
     */
    format?: TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
    /**
     * Page height in units
     */
    height?: number;
    /**
     * Page width in units
     */
    width?: number;
}
/**
 * Page rotation in degrees
 */
export declare enum TemplateDefinitionNewLayoutRotaionEnum {
    Zero = "0",
    Ninety = "90",
    OneHundredAndEighty = "180",
    TwoHundredAndSeventy = "270"
}
/**
 * Measure unit
 */
export declare enum TemplateDefinitionNewLayoutUnitEnum {
    Cm = "cm",
    In = "in"
}
/**
 * Defines template layout (e.g page format, margins).
 */
export declare class TemplateDefinitionNewLayout extends SpeakeasyBase {
    /**
     * Defines how many pages or labels should be empty
     */
    emptyLabels?: number;
    /**
     * Defines template page size
     */
    format?: TemplateDefinitionNewLayoutFormatEnum;
    /**
     * Page height in units
     */
    height?: number;
    /**
     * Page margins in units
     */
    margins?: TemplateDefinitionNewLayoutMargins;
    /**
     * Page orientation
     */
    orientation?: TemplateDefinitionNewLayoutOrientationEnum;
    /**
     * Defines page size if layout is repeated on the page e.g sheet labels
     */
    repeatLayout?: TemplateDefinitionNewLayoutRepeatLayout;
    /**
     * Page rotation in degrees
     */
    rotaion?: TemplateDefinitionNewLayoutRotaionEnum;
    /**
     * Measure unit
     */
    unit?: TemplateDefinitionNewLayoutUnitEnum;
    /**
     * Page width in units
     */
    width?: number;
}
export declare class TemplateDefinitionNewPagesMargins extends SpeakeasyBase {
    /**
     * Page or label margin from bottom
     */
    bottom?: number;
    /**
     * Page or label margin from right
     */
    right?: number;
}
export declare class TemplateDefinitionNewPages extends SpeakeasyBase {
    components?: Component[];
    /**
     * Page height in units
     */
    height?: number;
    margins?: TemplateDefinitionNewPagesMargins;
    /**
     * Page width in units
     */
    width?: number;
}
/**
 * Template configuration
 */
export declare class TemplateDefinitionNew extends SpeakeasyBase {
    /**
     * Indicates if the template is a draft or published.
     */
    isDraft?: boolean;
    /**
     * Defines template layout (e.g page format, margins).
     */
    layout?: TemplateDefinitionNewLayout;
    /**
     * Template name
     */
    name: string;
    /**
     * Defines page or label size, margins and components on page or label
     */
    pages?: TemplateDefinitionNewPages[];
    /**
     * A list of tags assigned to a template
     */
    tags?: string[];
}
