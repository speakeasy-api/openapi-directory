/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Offset } from "./offset";
import { Expose, Type } from "class-transformer";

/**
 * Place the title in one of nine predefined positions of the viewport. <ul>
 *
 * @remarks
 *   <li>`top` - top (center)</li>
 *   <li>`topRight` - top right</li>
 *   <li>`right` - right (center)</li>
 *   <li>`bottomRight` - bottom right</li>
 *   <li>`bottom` - bottom (center)</li>
 *   <li>`bottomLeft` - bottom left</li>
 *   <li>`left` - left (center)</li>
 *   <li>`topLeft` - top left</li>
 *   <li>`center` - center</li>
 * </ul>
 */
export enum TitleAssetPositionEnum {
  Top = "top",
  TopRight = "topRight",
  Right = "right",
  BottomRight = "bottomRight",
  Bottom = "bottom",
  BottomLeft = "bottomLeft",
  Left = "left",
  TopLeft = "topLeft",
  Center = "center",
}

/**
 * Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>
 *
 * @remarks
 *   <li>`xx-small`</li>
 *   <li>`x-small`</li>
 *   <li>`small`</li>
 *   <li>`medium`</li>
 *   <li>`large`</li>
 *   <li>`x-large`</li>
 *   <li>`xx-large`</li>
 * </ul>
 */
export enum TitleAssetSizeEnum {
  XxSmall = "xx-small",
  XSmall = "x-small",
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "x-large",
  XxLarge = "xx-large",
}

/**
 * Uses a preset to apply font properties and styling to the title. <ul>
 *
 * @remarks
 *   <li>`minimal`</li>
 *   <li>`blockbuster`</li>
 *   <li>`vogue`</li>
 *   <li>`sketchy`</li>
 *   <li>`skinny`</li>
 *   <li>`chunk`</li>
 *   <li>`chunkLight`</li>
 *   <li>`marker`</li>
 *   <li>`future`</li>
 *   <li>`subtitle`</li>
 * </ul>
 */
export enum TitleAssetStyleEnum {
  Minimal = "minimal",
  Blockbuster = "blockbuster",
  Vogue = "vogue",
  Sketchy = "sketchy",
  Skinny = "skinny",
  Chunk = "chunk",
  ChunkLight = "chunkLight",
  Marker = "marker",
  Future = "future",
  Subtitle = "subtitle",
}

/**
 * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
 */
export class TitleAsset extends SpeakeasyBase {
  /**
   * Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "background" })
  background?: string;

  /**
   * Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "color" })
  color?: string;

  /**
   * Offsets the position of an asset horizontally or vertically by a relative distance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  @Type(() => Offset)
  offset?: Offset;

  /**
   * Place the title in one of nine predefined positions of the viewport. <ul>
   *
   * @remarks
   *   <li>`top` - top (center)</li>
   *   <li>`topRight` - top right</li>
   *   <li>`right` - right (center)</li>
   *   <li>`bottomRight` - bottom right</li>
   *   <li>`bottom` - bottom (center)</li>
   *   <li>`bottomLeft` - bottom left</li>
   *   <li>`left` - left (center)</li>
   *   <li>`topLeft` - top left</li>
   *   <li>`center` - center</li>
   * </ul>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "position" })
  position?: TitleAssetPositionEnum;

  /**
   * Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>
   *
   * @remarks
   *   <li>`xx-small`</li>
   *   <li>`x-small`</li>
   *   <li>`small`</li>
   *   <li>`medium`</li>
   *   <li>`large`</li>
   *   <li>`x-large`</li>
   *   <li>`xx-large`</li>
   * </ul>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: TitleAssetSizeEnum;

  /**
   * Uses a preset to apply font properties and styling to the title. <ul>
   *
   * @remarks
   *   <li>`minimal`</li>
   *   <li>`blockbuster`</li>
   *   <li>`vogue`</li>
   *   <li>`sketchy`</li>
   *   <li>`skinny`</li>
   *   <li>`chunk`</li>
   *   <li>`chunkLight`</li>
   *   <li>`marker`</li>
   *   <li>`future`</li>
   *   <li>`subtitle`</li>
   * </ul>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "style" })
  style?: TitleAssetStyleEnum;

  /**
   * The title text string - i.e. "My Title".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text: string;

  /**
   * The type of asset - set to `title` for titles.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}
