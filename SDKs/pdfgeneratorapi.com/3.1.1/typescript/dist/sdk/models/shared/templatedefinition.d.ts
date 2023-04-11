import { SpeakeasyBase } from "../../../internal/utils";
import { Component } from "./component";
/**
 * Defines filter and sort option for root data set.
 */
export declare class TemplateDefinitionDataSettings extends SpeakeasyBase {
    filterBy?: Record<string, any>[];
    sortBy?: Record<string, any>[];
}
/**
 * Configuration preferences for the editor
 */
export declare class TemplateDefinitionEditor extends SpeakeasyBase {
    heightMultiplier?: number;
}
/**
 * Defines template page size
 */
export declare enum TemplateDefinitionLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Page margins in units
 */
export declare class TemplateDefinitionLayoutMargins extends SpeakeasyBase {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}
/**
 * Page orientation
 */
export declare enum TemplateDefinitionLayoutOrientationEnum {
    Portrait = "portrait",
    Landscape = "landscape"
}
/**
 * Defines template page size
 */
export declare enum TemplateDefinitionLayoutRepeatLayoutFormatEnum {
    A4 = "A4",
    Letter = "letter",
    Custom = "custom"
}
/**
 * Defines page size if layout is repeated on the page e.g sheet labels
 */
export declare class TemplateDefinitionLayoutRepeatLayout extends SpeakeasyBase {
    /**
     * Defines template page size
     */
    format?: TemplateDefinitionLayoutRepeatLayoutFormatEnum;
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
export declare enum TemplateDefinitionLayoutRotationEnum {
    Zero = "0",
    Ninety = "90",
    OneHundredAndEighty = "180",
    TwoHundredAndSeventy = "270"
}
/**
 * Measure unit
 */
export declare enum TemplateDefinitionLayoutUnitEnum {
    Cm = "cm",
    In = "in"
}
/**
 * Defines template layout (e.g page format, margins).
 */
export declare class TemplateDefinitionLayout extends SpeakeasyBase {
    /**
     * Defines how many pages or labels should be empty
     */
    emptyLabels?: number;
    /**
     * Defines template page size
     */
    format?: TemplateDefinitionLayoutFormatEnum;
    /**
     * Page height in units
     */
    height?: number;
    /**
     * Page margins in units
     */
    margins?: TemplateDefinitionLayoutMargins;
    /**
     * Page orientation
     */
    orientation?: TemplateDefinitionLayoutOrientationEnum;
    /**
     * Defines page size if layout is repeated on the page e.g sheet labels
     */
    repeatLayout?: TemplateDefinitionLayoutRepeatLayout;
    /**
     * Page rotation in degrees
     */
    rotation?: TemplateDefinitionLayoutRotationEnum;
    /**
     * Measure unit
     */
    unit?: TemplateDefinitionLayoutUnitEnum;
    /**
     * Page width in units
     */
    width?: number;
}
export declare class TemplateDefinitionPagesMargins extends SpeakeasyBase {
    /**
     * Page or label margin from bottom
     */
    bottom?: number;
    /**
     * Page or label margin from right
     */
    right?: number;
}
export declare class TemplateDefinitionPages extends SpeakeasyBase {
    components?: Component[];
    /**
     * Page height in units
     */
    height?: number;
    margins?: TemplateDefinitionPagesMargins;
    /**
     * Page width in units
     */
    width?: number;
}
export declare class TemplateDefinition extends SpeakeasyBase {
    /**
     * Defines filter and sort option for root data set.
     */
    dataSettings?: TemplateDefinitionDataSettings;
    /**
     * Configuration preferences for the editor
     */
    editor?: TemplateDefinitionEditor;
    /**
     * Unique identifier
     */
    id?: number;
    /**
     * Indicates if the template is a draft or published.
     */
    isDraft?: boolean;
    /**
     * Defines template layout (e.g page format, margins).
     */
    layout?: TemplateDefinitionLayout;
    /**
     * Template name
     */
    name?: string;
    /**
     * Defines page or label size, margins and components on page or label
     */
    pages?: TemplateDefinitionPages[];
    /**
     * A list of tags assigned to a template
     */
    tags?: string[];
}
