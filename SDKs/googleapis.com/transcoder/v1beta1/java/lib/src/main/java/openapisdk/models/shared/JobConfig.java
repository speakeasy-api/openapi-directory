package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobConfig
 * Job configuration
**/
public class JobConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adBreaks")
    public AdBreak[] adBreaks;
    public JobConfig withAdBreaks(AdBreak[] adBreaks) {
        this.adBreaks = adBreaks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editList")
    public EditAtom[] editList;
    public JobConfig withEditList(EditAtom[] editList) {
        this.editList = editList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elementaryStreams")
    public ElementaryStream[] elementaryStreams;
    public JobConfig withElementaryStreams(ElementaryStream[] elementaryStreams) {
        this.elementaryStreams = elementaryStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputs")
    public Input[] inputs;
    public JobConfig withInputs(Input[] inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifests")
    public Manifest[] manifests;
    public JobConfig withManifests(Manifest[] manifests) {
        this.manifests = manifests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("muxStreams")
    public MuxStream[] muxStreams;
    public JobConfig withMuxStreams(MuxStream[] muxStreams) {
        this.muxStreams = muxStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public Output output;
    public JobConfig withOutput(Output output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlays")
    public Overlay[] overlays;
    public JobConfig withOverlays(Overlay[] overlays) {
        this.overlays = overlays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubDestination")
    public PubsubDestination pubsubDestination;
    public JobConfig withPubsubDestination(PubsubDestination pubsubDestination) {
        this.pubsubDestination = pubsubDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spriteSheets")
    public SpriteSheet[] spriteSheets;
    public JobConfig withSpriteSheets(SpriteSheet[] spriteSheets) {
        this.spriteSheets = spriteSheets;
        return this;
    }
}