package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostSpinsRequestBody {
    @SpeakeasyMetadata("form:name=artist")
    public String artist;
    public PostSpinsRequestBody withArtist(String artist) {
        this.artist = artist;
        return this;
    }
    @SpeakeasyMetadata("form:name=composer")
    public String composer;
    public PostSpinsRequestBody withComposer(String composer) {
        this.composer = composer;
        return this;
    }
    @SpeakeasyMetadata("form:name=duration")
    public Long duration;
    public PostSpinsRequestBody withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("form:name=genre")
    public String genre;
    public PostSpinsRequestBody withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @SpeakeasyMetadata("form:name=isrc")
    public String isrc;
    public PostSpinsRequestBody withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @SpeakeasyMetadata("form:name=label")
    public String label;
    public PostSpinsRequestBody withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("form:name=live")
    public Boolean live;
    public PostSpinsRequestBody withLive(Boolean live) {
        this.live = live;
        return this;
    }
    @SpeakeasyMetadata("form:name=release")
    public String release;
    public PostSpinsRequestBody withRelease(String release) {
        this.release = release;
        return this;
    }
    @SpeakeasyMetadata("form:name=song")
    public String song;
    public PostSpinsRequestBody withSong(String song) {
        this.song = song;
        return this;
    }
    @SpeakeasyMetadata("form:name=start")
    public OffsetDateTime start;
    public PostSpinsRequestBody withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}