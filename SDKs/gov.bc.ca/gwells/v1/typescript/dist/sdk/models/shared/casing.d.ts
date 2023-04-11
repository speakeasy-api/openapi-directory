import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CasingDriveShoeEnum {
    False = "false",
    True = "true"
}
export declare class Casing extends SpeakeasyBase {
    casingCode?: string;
    casingMaterial?: string;
    diameter: string;
    driveShoe?: CasingDriveShoeEnum;
    end: string;
    start: string;
    wallThickness?: string;
}
