/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest extends SpeakeasyBase {
  /**
   * ID of an existing network to detach the Server from
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network" })
  network: number;
}

export class PostServersIdActionsDetachFromNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostServersIdActionsDetachFromNetworkDetachFromNetworkRequest;

  /**
   * ID of the Server
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

/**
 * Error message for the Action if error occurred, otherwise null
 */
export class PostServersIdActionsDetachFromNetworkActionResponseActionError extends SpeakeasyBase {
  /**
   * Fixed machine readable code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: string;

  /**
   * Humanized error message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class PostServersIdActionsDetachFromNetworkActionResponseActionResources extends SpeakeasyBase {
  /**
   * ID of the Resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * Type of resource referenced
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

/**
 * Status of the Action
 */
export enum PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum {
  Success = "success",
  Running = "running",
  Error = "error",
}

export class PostServersIdActionsDetachFromNetworkActionResponseAction extends SpeakeasyBase {
  /**
   * Command executed in the Action
   */
  @SpeakeasyMetadata()
  @Expose({ name: "command" })
  command: string;

  /**
   * Error message for the Action if error occurred, otherwise null
   */
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => PostServersIdActionsDetachFromNetworkActionResponseActionError)
  error: PostServersIdActionsDetachFromNetworkActionResponseActionError;

  /**
   * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "finished" })
  finished: string;

  /**
   * ID of the Resource
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * Progress of Action in percent
   */
  @SpeakeasyMetadata()
  @Expose({ name: "progress" })
  progress: number;

  /**
   * Resources the Action relates to
   */
  @SpeakeasyMetadata({
    elemType:
      PostServersIdActionsDetachFromNetworkActionResponseActionResources,
  })
  @Expose({ name: "resources" })
  @Type(
    () => PostServersIdActionsDetachFromNetworkActionResponseActionResources
  )
  resources: PostServersIdActionsDetachFromNetworkActionResponseActionResources[];

  /**
   * Point in time when the Action was started (in ISO-8601 format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "started" })
  started: string;

  /**
   * Status of the Action
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PostServersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
}

/**
 * The `action` key in the reply contains an Action object with this structure
 */
export class PostServersIdActionsDetachFromNetworkActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  @Type(() => PostServersIdActionsDetachFromNetworkActionResponseAction)
  action: PostServersIdActionsDetachFromNetworkActionResponseAction;
}

export class PostServersIdActionsDetachFromNetworkResponse extends SpeakeasyBase {
  /**
   * The `action` key in the reply contains an Action object with this structure
   */
  @SpeakeasyMetadata()
  actionResponse?: PostServersIdActionsDetachFromNetworkActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
