/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Project } from "./project";
import { Expose, Type } from "class-transformer";

/**
 * Project List Response
 */
export class ProjectsListResponse extends SpeakeasyBase {
  /**
   * Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * Pagination token to be used for the next list operation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  /**
   * Project collection.
   */
  @SpeakeasyMetadata({ elemType: Project })
  @Expose({ name: "projects" })
  @Type(() => Project)
  projects?: Project[];
}
