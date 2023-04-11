import { SpeakeasyBase } from "../../../internal/utils";
export declare class Process extends SpeakeasyBase {
    /**
     * Crops the image according to the specified mechanism. If you specify the size "WidthexHeight", the image will be cropped centered. If coordinates "x1,y1,x2,y2" are given, the image is cropped according to the coordinates. The image will be cropped to the size of the stories if "faces" are specified as. Example Centered: "crop": "200x300". Example Region: "crop": "200,300,150,300". Example Faces: "crop": "faces".
     */
    crop?: string;
    /**
     * Flips the image around the horizontal axis, from top to bottom. Example: "flip": true
     */
    flip?: boolean;
    /**
     * Mirrors the image around the vertical axis, i.e. from right to left. Example: "mirror": true
     */
    mirror?: boolean;
    /**
     * Schlüssel welcher Verarbeitungs-Algorithmus angewendet wird. Zur Auswahl stehen "logo-to-vector", "logo-super-resolution", "logo-segmentation" und "image-processing".
     */
    processingAlgorithm: string;
    /**
     * Changes the size of the image according to the specified size. Example: "resize": "200x300".
     */
    resize?: string;
    /**
     * Rotates the image around the center according to the specified degree. Example: "rotate": 90
     */
    rotate?: number;
}
