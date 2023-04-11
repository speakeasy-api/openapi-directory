import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines component class/type
 */
export declare enum ComponentClsEnum {
    LabelComponent = "labelComponent",
    NumberComponent = "numberComponent",
    TextComponent = "textComponent",
    ImageComponent = "imageComponent",
    DateComponent = "dateComponent",
    HlineComponent = "hlineComponent",
    VlineComponent = "vlineComponent",
    TableComponent = "tableComponent",
    CompositeComponent = "compositeComponent",
    BarcodeComponent = "barcodeComponent",
    QrcodeComponent = "qrcodeComponent",
    ChartComponent = "chartComponent",
    RectangleComponent = "rectangleComponent",
    HeaderComponent = "headerComponent",
    FooterComponent = "footerComponent",
    CheckboxComponent = "checkboxComponent",
    RadioComponent = "radioComponent"
}
/**
 * Template component definition
 */
export declare class Component extends SpeakeasyBase {
    /**
     * Defines component class/type
     */
    cls?: ComponentClsEnum;
    /**
     * Defines data field for Table and Container components which are used to iterate over list of items
     */
    dataIndex?: string;
    /**
     * Height in units
     */
    height?: number;
    /**
     * Component id
     */
    id?: string;
    /**
     * Position from the page left in units
     */
    left?: number;
    /**
     * Position from the page top in units
     */
    top?: number;
    /**
     * Component value
     */
    value?: string;
    /**
     * Width in units
     */
    width?: number;
    /**
     * Defines the rendering order on page. Components with smaller zindex are rendered before
     */
    zindex?: number;
}
