import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PhotoTypeEnum {
    Photo = "photo"
}
/**
 * This contains the list of the fields that are common to all media returned.
**/
export declare class Photo extends SpeakeasyBase {
    height?: number;
    mediaKey?: string;
    type?: PhotoTypeEnum;
    url?: string;
    width?: number;
}
