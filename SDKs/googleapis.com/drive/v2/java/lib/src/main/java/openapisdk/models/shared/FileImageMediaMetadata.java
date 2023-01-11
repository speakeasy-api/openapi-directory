package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileImageMediaMetadata
 * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
**/
public class FileImageMediaMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aperture")
    public Float aperture;
    public FileImageMediaMetadata withAperture(Float aperture) {
        this.aperture = aperture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cameraMake")
    public String cameraMake;
    public FileImageMediaMetadata withCameraMake(String cameraMake) {
        this.cameraMake = cameraMake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cameraModel")
    public String cameraModel;
    public FileImageMediaMetadata withCameraModel(String cameraModel) {
        this.cameraModel = cameraModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colorSpace")
    public String colorSpace;
    public FileImageMediaMetadata withColorSpace(String colorSpace) {
        this.colorSpace = colorSpace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public FileImageMediaMetadata withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exposureBias")
    public Float exposureBias;
    public FileImageMediaMetadata withExposureBias(Float exposureBias) {
        this.exposureBias = exposureBias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exposureMode")
    public String exposureMode;
    public FileImageMediaMetadata withExposureMode(String exposureMode) {
        this.exposureMode = exposureMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exposureTime")
    public Float exposureTime;
    public FileImageMediaMetadata withExposureTime(Float exposureTime) {
        this.exposureTime = exposureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flashUsed")
    public Boolean flashUsed;
    public FileImageMediaMetadata withFlashUsed(Boolean flashUsed) {
        this.flashUsed = flashUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("focalLength")
    public Float focalLength;
    public FileImageMediaMetadata withFocalLength(Float focalLength) {
        this.focalLength = focalLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public FileImageMediaMetadata withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isoSpeed")
    public Integer isoSpeed;
    public FileImageMediaMetadata withIsoSpeed(Integer isoSpeed) {
        this.isoSpeed = isoSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lens")
    public String lens;
    public FileImageMediaMetadata withLens(String lens) {
        this.lens = lens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public FileImageMediaMetadataLocation location;
    public FileImageMediaMetadata withLocation(FileImageMediaMetadataLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxApertureValue")
    public Float maxApertureValue;
    public FileImageMediaMetadata withMaxApertureValue(Float maxApertureValue) {
        this.maxApertureValue = maxApertureValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meteringMode")
    public String meteringMode;
    public FileImageMediaMetadata withMeteringMode(String meteringMode) {
        this.meteringMode = meteringMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotation")
    public Integer rotation;
    public FileImageMediaMetadata withRotation(Integer rotation) {
        this.rotation = rotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensor")
    public String sensor;
    public FileImageMediaMetadata withSensor(String sensor) {
        this.sensor = sensor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectDistance")
    public Integer subjectDistance;
    public FileImageMediaMetadata withSubjectDistance(Integer subjectDistance) {
        this.subjectDistance = subjectDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whiteBalance")
    public String whiteBalance;
    public FileImageMediaMetadata withWhiteBalance(String whiteBalance) {
        this.whiteBalance = whiteBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public FileImageMediaMetadata withWidth(Integer width) {
        this.width = width;
        return this;
    }
}