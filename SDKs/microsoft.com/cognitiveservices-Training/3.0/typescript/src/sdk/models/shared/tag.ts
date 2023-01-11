import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagTypeEnum {
    Regular = "Regular",
    Negative = "Negative"
}


// Tag
/** 
 * Represents a Tag.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageCount" })
  imageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: TagTypeEnum;
}


// TagInput
/** 
 * Represents a Tag.
**/
export class TagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type, form, name=type;" })
  type: TagTypeEnum;
}
