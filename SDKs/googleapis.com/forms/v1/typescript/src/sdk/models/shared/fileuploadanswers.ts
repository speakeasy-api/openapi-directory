/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FileUploadAnswer } from "./fileuploadanswer";
import { Expose, Type } from "class-transformer";

/**
 * All submitted files for a FileUpload question.
 */
export class FileUploadAnswers extends SpeakeasyBase {
  /**
   * Output only. All submitted files for a FileUpload question.
   */
  @SpeakeasyMetadata({ elemType: FileUploadAnswer })
  @Expose({ name: "answers" })
  @Type(() => FileUploadAnswer)
  answers?: FileUploadAnswer[];
}
