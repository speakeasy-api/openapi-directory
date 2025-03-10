/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Application related details of a job posting.
 */
export class ApplicationInfo extends SpeakeasyBase {
  /**
   * Optional but at least one of uris, emails or instruction must be specified. Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of allowed characters for each entry is 255.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "emails" })
  emails?: string[];

  /**
   * Optional but at least one of uris, emails or instruction must be specified. Use this field to provide instructions, such as "Mail your application to ...", that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "instruction" })
  instruction?: string;

  /**
   * Optional but at least one of uris, emails or instruction must be specified. Use this URI field to direct an applicant to a website, for example to link to an online application form. The maximum number of allowed characters for each entry is 2,000.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uris" })
  uris?: string[];
}
