import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableGraphTypeEnum {
    OneHundred = "100",
    TwoHundred = "200",
    ThreeHundred = "300"
}
export declare class WritableGraphInput extends SpeakeasyBase {
    link?: string;
    name: string;
    source: string;
    type: WritableGraphTypeEnum;
    weight?: number;
}
