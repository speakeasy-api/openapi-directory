import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImprovementProgramMultipartImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImprovementProgramMultipart extends SpeakeasyBase {
    imageFile?: ImprovementProgramMultipartImageFile;
    imageFileB64?: string;
    imageFilename?: string;
    imageUrl?: string;
    tag?: string;
}
